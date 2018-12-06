export class Themes {
    static changeTheme(theme: string) {
        const themesData = {
            default: '',
            pink: 'indigo-pink-theme',
            dark: 'work7-dark-theme',
        };
        document.querySelector('body').setAttribute('class', themesData[theme]);
    }
}
