import InformationCardContainer from '@/modules/about/components/InformationCardContainer'
import { mount } from "@vue/test-utils"

describe('InformationCardContainerComponent',() => {

    test('should match with snapshot', () => {
        const informationCardContainerComponentWrapped =  mount(InformationCardContainer,{
            data () {
                return {
                    cards: [
                        {
                            image: require("@/assets/about-icons/social-network.svg"),
                            title: "Red Social",
                            content:
                              "Para la comunidad de desaparecidos en el mundo. Sus familiares o amigos podrán vincularse todas las entidades involucradas en la problemática de desaparición. SE BUSCAN será el nodo mundial de información dedesaparecidos.",
                          }
                    ]
                }
            }
        });
 
     expect(informationCardContainerComponentWrapped.html()).toMatchSnapshot()
 
     })
})