import { api } from "@/api";
import { mount } from "@/api/setup";

const handler = mount(api);

export const GET = handler;

export const POST = handler;
