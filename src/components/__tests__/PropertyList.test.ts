import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PropertyList from "../PropertyList.vue";

it('correctly returns list title', () => {
    const wrapper = mount(PropertyList, {
        props: {
            title: "Saved properties",
            properties: [{
                price: "$526,500",
                agency: {
                  brandingColors: {
                    primary: "#000000",
                  },
                  logo: "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
                },
                id: "4",
                mainImage:
                  "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
              }]
        }
    })
    expect(wrapper.text()).toContain("Saved properties");
})

it('captures event from PropertyCard and then emits add event', () => {
    const wrapper = mount(PropertyList, {
        props: {
            type: "result",
            properties: [{
                price: "$526,500",
                agency: {
                  brandingColors: {
                    primary: "#000000",
                  },
                  logo: "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
                },
                id: "4",
                mainImage:
                  "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
              },
              {
                  price: "$826,500",
                  agency: {
                    brandingColors: {
                      primary: "#57B5E0",
                    },
                    logo: "https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif",
                  },
                  id: "3",
                  mainImage:
                    "https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg",
              }]
        }
    })

    wrapper.vm.$refs.cards[1].$emit('action-clicked')

    expect(wrapper.emitted()).toHaveProperty('add')
})