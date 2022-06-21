import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PropertyCard from "../utilities/PropertyCard.vue";

it('emits an event when clicked', () => {
    const wrapper = mount(PropertyCard, {
        props: {
            property: {
                price: "$526,500",
                agency: {
                    brandingColors: {
                    primary: "#000000",
                    },
                    logo: "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
                },
                id: "4",
                mainImage: "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
            },
        },
        data() {
            return {
                showActions: true
            }
        }
    })
    
    wrapper.findComponent({ ref: 'action-button' }).trigger('click')
  
    expect(wrapper.emitted()).toHaveProperty('action-clicked')
})

it('renders property data correctly', () => {
    const wrapper = mount(PropertyCard, {
        props: {
            property: {
                price: "$526,500",
                agency: {
                    brandingColors: {
                    primary: "#000000",
                    },
                    logo: "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
                },
                id: "4",
                mainImage: "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
            },
        }
    })

    expect(wrapper.text()).toContain("$526,500");
})