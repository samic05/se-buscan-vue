import InformationCard from '@/modules/about/components/InformationCard'
import { shallowMount } from "@vue/test-utils"

describe('InformationCardComponent',() => {

    test('should match with snapshot', () => {
        const informationCardComponentWrapped =  shallowMount(InformationCard,{
            props:{
                information: {
                    image: require("@/assets/about-icons/social-network.svg"),
                    title: "Red Social",
                    content:
                      "Para la comunidad de desaparecidos en el mundo. Sus familiares o amigos podrán vincularse todas las entidades involucradas en la problemática de desaparición. SE BUSCAN será el nodo mundial de información dedesaparecidos.",
                  }
            }
        });
 
     expect(informationCardComponentWrapped.html()).toMatchSnapshot()
 
     })
})