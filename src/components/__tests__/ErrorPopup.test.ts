import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ErrorPopup from "../utilities/ErrorPopup.vue";

it('returns the correct error message', () => {
    const wrapper = mount(ErrorPopup, {
        props: {
            msg: "You've already saved this property!"
        }
    })
    expect(wrapper.text()).toContain("You've already saved this property!");
})