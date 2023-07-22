export const changeTheme = () =>{
    if(document.documentElement.getAttribute('data-bs-theme') === 'dark'){
        console.log('im in');
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }else{
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
}