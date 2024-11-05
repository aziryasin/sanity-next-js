import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { employeeType } from "./employeeType";
import { clientType } from "./clientType";
import { departmentType } from "./departmentType";
import { expertiseType } from "./expertiseType";
import { expertiseLevelType } from "./expertiseLevelType";
import { pageContentType } from "./pageContentType";
import { headerItemType } from "./headerItemType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    projectType,
    employeeType,
    clientType,
    departmentType,
    expertiseType,
    expertiseLevelType,
    headerItemType,
    pageContentType,
  ],
};
