export class menuItem {
  constructor(name, id, icon) {
    this.name = name;
    this.id = id;
    this.icon = icon;
  }
}
/**
 * @export
 * @class Project
 * @param {string} name
 * @param {string} picture
 * @param {string} description
 * @param {string} deployURI
 * @param {string} repoURI
 * @param {boolean} show - to show this project or not
 * @returns {object}
 */
export class Project {
  constructor(name, picture, description, deployURI, repoURI, show) {
    this.name = name;
    this.picture = picture;
    this.description = description;
    this.deployURI = deployURI;
    this.repoURI = repoURI;
    this.show = show;
  }
}
