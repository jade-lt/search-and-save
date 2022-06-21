import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UtilityButton from "../utilities/UtilityButton.vue";

it('returns the correct label', () => {
    const wrapper = mount(UtilityButton, {
        props: {
            label: "Remove"
        }
    })
    expect(wrapper.text()).toContain("Remove");
})