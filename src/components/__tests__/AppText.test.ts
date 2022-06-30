import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AppText from "../AppText.vue";

it('heading returns false', () => {
    const wrapper = mount(AppText, {
        props: {
            heading: true
        }
    })
    expect(wrapper.vm.heading).toBe(true)
})