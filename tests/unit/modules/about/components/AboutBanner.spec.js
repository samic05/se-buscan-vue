import AboutBanner from '@/modules/about/components/AboutBanner'
import { shallowMount } from "@vue/test-utils"

describe('AboutBannerComponent',() => {

    test('should match with snapshot', () => {
        const aboutBannerComponetWrapped =  shallowMount(AboutBanner);
 
     expect(aboutBannerComponetWrapped.html()).toMatchSnapshot()
 
     })
})