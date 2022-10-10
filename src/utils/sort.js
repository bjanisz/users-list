export const getSortedUsers = (users, sort) => {
    if (sort.fieldName === 'name') {
        return sort.sortBy === 'ASC' ? users.sort((a, b) => a.name.localeCompare(b.name)) : users.sort((a, b) => b.name.localeCompare(a.name))
    }

    if (sort.fieldName === 'username') {
        return sort.sortBy === 'ASC' ? users.sort((a, b) => a.username.localeCompare(b.username)) : users.sort((a, b) => b.username.localeCompare(a.username))
    }

    if (sort.fieldName === 'email') {
        return sort.sortBy === 'ASC' ? users.sort((a, b) => a.email.localeCompare(b.email)) : users.sort((a, b) => b.email.localeCompare(a.email))
    }

    if (sort.fieldName === 'companyName') {
        return sort.sortBy === 'ASC' ? users.sort((a, b) => a.company.name.localeCompare(b.company.name)) : users.sort((a, b) => b.company.name.localeCompare(a.company.name))
    }

    return users
}
