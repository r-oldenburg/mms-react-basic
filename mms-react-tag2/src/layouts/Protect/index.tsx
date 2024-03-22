import { useLocalStorage } from '@/hooks/useLocalStorage'
import ProtectRender from './ProtectRender'

const Protect = () => {

    const local = useLocalStorage("user", null)

  return (
    <ProtectRender user={local.value}/>
  )
}

export default Protect
