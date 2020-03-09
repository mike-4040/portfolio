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
 */
export class Project {
  constructor(name, picture, description, deployURI, repoURI) {
    this.name = name;
    this.picture = picture;
    this.description = description;
    this.deployURI = deployURI;
    this.repoURI = repoURI;
  }
}
