/**
 * Project Subject is one of three subjects, which contains a list of projects under it.
 */
export class ProjectSubject {
  title: String;
  projectList: Project[];
}

/**
 * An individual project.
 */
export class Project {
  title: String;
  id: String;
  imageURL: String;
}
