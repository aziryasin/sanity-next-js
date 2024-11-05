import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { projectType } from "./projectType";
import { employeeType } from "./employeeType";
import { clientType } from "./clientType";
import { departmentType } from "./departmentType";
import { expertiseType } from "./expertiseType";
import { expertiseLevelType } from "./expertiseLevelType";
import { headerType } from "./headerType";
import { pageContentType } from "./pageContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projectType,
    employeeType,
    clientType,
    departmentType,
    expertiseType,
    expertiseLevelType,
    headerType,
    pageContentType,
  ],
};
