import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppButton from "../AppButton.vue";

it('returns the correct label', () => {
    const wrapper = mount(AppButton, {
        props: {
            label: "Remove"
        }
    })
    expect(wrapper.text()).toContain("Remove");
})