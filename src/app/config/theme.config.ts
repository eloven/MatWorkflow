export class Themes {
    /**
     * change theme
     */
    static changeTheme(theme: string): void {
        const themesData = {
            default: '',
            pink: 'indigo-pink-theme',
            dark: 'work7-dark-theme',
        };
        document.querySelector('body').setAttribute('class', themesData[theme]);
    }
}
