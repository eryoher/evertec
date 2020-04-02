import React, { Component, Fragment } from 'react'


class GloblaShorcut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            keysDown: [],
            shortcuts: []
        };

        this.listeners = [];
        this.holdListeners = [];
        this.holdDurations = [];

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    componentDidMount() {
        const { shortcuts } = this.props

        document.addEventListener('keydown', this.handleKeyPress);

        if (shortcuts) {
            shortcuts.forEach(short => {
                this.registerShortcut(short.action, short.hotkey.modifiers, short.name, short.description);
            });
        }
    }

    componentWillUnmount() {
        const { shortcut, shortcuts } = this.props
        if (shortcuts) {
            shortcuts.forEach(short => {
                this.unregisterShortcut(short.hotkey.modifiers);
            });
        }

    }

    registerShortcut = (method, keys, title, description, holdDuration) => {

        const nextShortcuts = [...this.state.shortcuts];

        // do we need to hold this shortcut?
        const hold = holdDuration !== undefined
        const duration = holdDuration !== undefined ? holdDuration : 0
        const transformedKeys = this.transformKeys(keys)

        // create new shortcut
        const shortcut = {
            id: Date.now().toString(36),
            description,
            hold,
            holdDuration: duration,
            keys: transformedKeys,
            method,
            sequence: false,
            title,
        }
        // add it to the list of shortcuts
        nextShortcuts.push(shortcut)

        // create a listener for each key
        transformedKeys.forEach(key => {
            if (hold) {
                this.holdDurations[key] = duration
                this.holdListeners[key] = method
            } else {
                if (!this.listeners[key]) {
                    this.listeners[key] = []
                }

                this.listeners[key] = [...this.listeners[key], method]
            }
        })

        this.setState({
            shortcuts: nextShortcuts,
        })

    }

    /**
  * Remove a shortcut from the application
  */
    unregisterShortcut = (keys, sequence = false) => {
        const transformedKeys = this.transformKeys(keys);
        if (!sequence) {
            transformedKeys.forEach(key => {
                if (this.listeners[key])
                    delete this.listeners[key]
                if (this.holdListeners[key])
                    delete this.holdListeners[key]
                if (this.holdDurations[key])
                    delete this.holdDurations[key]
            })
        } else {
            const keyEvent = transformedKeys.join(',')
            delete this.sequenceListeners[keyEvent]
        }

        // Delete the shortcut
        const nextShortcuts = this.state.shortcuts.filter(({ keys: shortcutKeys }) => {
            let match = true
            shortcutKeys.forEach(shortcutKey => {
                match = match && transformedKeys.indexOf(shortcutKey) >= 0
            })
            return !match
        })

        this.shortcuts = nextShortcuts

        this.setState({
            shortcuts: nextShortcuts,
        })
    }

    transformKeys = (keys) => {
        return keys.map(rawKeys => {
            // force keys to be a string (we might have a number)
            const splitKeys = `${rawKeys}`.split('+')
            const transformedKeys = splitKeys.map(key => {
                const keyEvent = key.toLowerCase()
                switch (keyEvent) {
                    case 'opt':
                    case 'option':
                        return 'alt'
                    case 'control':
                        return 'ctrl'
                    case 'cmd':
                    case 'command':
                        return 'meta'
                    default:
                        return keyEvent
                }
            })
            return transformedKeys.join('+')
        })
    }

    handleKeyPress = (e) => {

        if (!e.key) {
            return false;
        }
        const { ignoreTagNames, preventDefault = true } = this.props
        const target = e.target;
        // ignore listening when certain elements are focused
        const ignore = ignoreTagNames
            ? [...ignoreTagNames.map(tag => tag.toLowerCase())]
            : "";
        // The currently pressed key
        const key = e.key.toLowerCase()

        //to ignore elements.
        if (ignore.indexOf(target.tagName.toLowerCase()) < 0) {

            const keysDown = []

            if (e.ctrlKey === true) {
                keysDown.push('ctrl')
            }
            if (e.altKey === true) {
                keysDown.push('alt')
            }
            if (e.metaKey === true) {
                keysDown.push('meta')
            }
            if (e.shiftKey === true) {
                keysDown.push('shift')
            }

            keysDown.push(key)

            const keyPress = keysDown.join('+')

            //console.log(keyPress, this.listeners)

            if (this.listeners[keyPress]) {
                // automatically preventDefault on the key
                if (preventDefault) {
                    e.preventDefault()
                }
                this.listeners[keyPress].forEach(method => method(e))
            }

            //this.setState({ keysDown: [...this.state.keysDown, ...keysDown] }) //Se comenta por ahora...
        }
    }

    handleKeyUp = (e) => {
        // console.log(e, 'up')
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}

export default GloblaShorcut
