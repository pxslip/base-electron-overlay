import activeWindow from 'active-win';

const APP_TITLES = ['Path of Exile'];
const APP_TITLE_STARTS_WITH = ['Path of Exile <---> '];
const APP_PATHS = [
  'pathofexile_x64_kg.exe',
  'pathofexile_kg.exe',
  'pathofexile_x64steam.exe',
  'pathofexilesteam.exe',
  'pathofexile_x64.exe',
  'pathofexile.exe',
  'pathofexile_x64_kg',
  'pathofexile_kg',
  'pathofexile_x64steam',
  'pathofexilesteam',
  'pathofexile_x64',
  'pathofexile',
  'wine64-preloader', // linux
];

class ActiveWindow {
  /**
   * @type {activeWindow.Result}
   */
  activeWindow;
  /**
   * @type {Boolean}
   */
  isActive;

  constructor(config = {}) {
    Object.assign(config, {});
  }

  /**
   * @returns {void}
   */
  async applicationIsActive() {
    const current = await activeWindow();
    if (current.id === activeWindow.id) {
      return this.isActive;
    } else {
    }
  }
}
