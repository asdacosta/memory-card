import { v4 as uuid } from "uuid";

const ids = Array.from({ length: 8 }, () => uuid());

export { ids };
