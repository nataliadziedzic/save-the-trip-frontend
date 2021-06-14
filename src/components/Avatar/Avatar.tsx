import * as React from 'react'
import Identicon from 'identicon.js'
import hash from 'object-hash'
import { AuthedUser } from '../../types'
import { StyledAvatar } from './Avatar.style'

export interface AvatarProps {
  user: AuthedUser
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const [avatar, setAvatar] = React.useState('')

  React.useEffect(() => {
    if (user) {
      const data = new Identicon(hash({ email: user.email }), { format: 'svg' }).toString()
      const src = 'data:image/svg+xml;base64,'
      setAvatar(src + data)
    }
  }, [user])
  return <StyledAvatar src={avatar} alt={user.username!} />
}

export default Avatar
