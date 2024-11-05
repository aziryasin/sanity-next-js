import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const HEADER_CONTENT_QUERY = defineQuery(`
*[_type == "headerItem"]| order(label desc){ path,label}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)]|order(startedAt desc){
  _id,
  title,
  projectId,
  slug,
  description,
  image,
  startedAt,
  client->
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,slug,image, title,projectId,client->,startedAt,description
}`);

export const ASSIGNED_EMPLOYEES_QUERY = defineQuery(`
*[_type == "employee" && references($projectId)]{ _id,slug, name,designation,joinedAt,"projects":assignedProjects[]->_id,"skills":skills[]{"stack":expertise->title,expertiseLevel}}`);

export const EMPLOYEES_QUERY = defineQuery(`
*[_type == "employee" ]{ _id,slug, name,designation,joinedAt,"projects":assignedProjects[]->_id,image,"skills":skills[]{"stack":expertise->title,expertiseLevel}}`);

export const EMPLOYEE_QUERY = defineQuery(`
*[_type == "employee" && slug.current == $slug][0]{ _id,slug,image, name,designation,"department":department->name,joinedAt,"projects":assignedProjects[]->{title,slug},"skills":skills[]{"stack":expertise->title,expertiseLevel}}`);
