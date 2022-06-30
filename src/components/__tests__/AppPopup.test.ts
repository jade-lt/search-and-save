import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppPopup from "../AppPopup.vue";

it('returns the correct error message', () => {
    const wrapper = mount(AppPopup, {
        props: {
            msg: "You've already saved this property!"
        }
    })
    expect(wrapper.text()).toContain("You've already saved this property!");
})