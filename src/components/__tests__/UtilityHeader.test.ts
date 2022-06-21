import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UtilityHeader from "../utilities/UtilityHeader.vue";

describe("UtilityHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(UtilityHeader);
    expect(wrapper.text()).toContain("Search & Save");
  });
});
