import {} from '@vue/composition-api'
import Banner from '@/components/Banner'
import EventCarousel from '@/components/EventCarousel'
import Blood from '@/components/Blood'

export default {
  name: 'PageEvent',
  components: {
    Banner,
    Blood,
    EventCarousel
  },
  setup (props, context) {
  }
}
