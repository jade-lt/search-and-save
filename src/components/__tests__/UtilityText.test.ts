import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UtilityText from "../utilities/UtilityText.vue";

it('heading returns false', () => {
    const wrapper = mount(UtilityText, {
        props: {
            heading: true
        }
    })
    expect(wrapper.vm.heading).toBe(true)
})