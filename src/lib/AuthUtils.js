export function getRolename(auth) {

}

export function isLoggedIn(auth) {
    // make sure that all user information is consistent (i.e.: the saved state matches what the app will need)    
    return auth.authUser && auth.authUser.token;
}

export function isRoleAllowed(auth, acl) {

}

export function getHomeForRole(rolename, mapping) {

}