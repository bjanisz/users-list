export const filterUserBySearchInputValue = (user, searchInputValue) => {
    if (user.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
        return true;
    } else if (user.username.toLowerCase().includes(searchInputValue.toLowerCase())) {
        return true;
    } else if (user.email.toLowerCase().includes(searchInputValue.toLowerCase())) {
        return true;
    } else if (user.company.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
        return true;
    }

    return false;
}
