import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function chat() {
  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col">
        <div className="border-bottom flex items-center p-20">
          <Avatar />
          <div className="flex-1  pl-10">
            <h3 className="mb-10 font-semibold ">Room name</h3>
            <p className="text-gray">Last Seen at....</p>
          </div>
          <div className="chat__headerRight">
            <IconButton></IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="flex-1">
          <p className="chat__message mb-30 relative w-fit rounded-xl bg-white p-10 text-base ">
            <span className="chat__name mt-15 font-extra-bold absolute text-xs">
              Bhavya
            </span>
            this is a msg
            <span className="chat__timestamp ml-10 text-xs">
              {new Date().toUTCString()}
            </span>
          </p>
          <p className="chat__message mb-30 relative w-fit rounded-xl bg-white p-10 text-base">
            <span className="chat__name mt-15 font-extra-bold absolute text-xs">
              Bhavya
            </span>
            this is a msg
            <span className="chat__timestamp ml-10 text-xs">
              {new Date().toUTCString()}
            </span>
          </p>
          <p className="chat__message chat__receiver">
            <span className="chat__name">Bhavya</span>
            this is a msg
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chat__footer 1 display-flex h-67 1 flex items-center justify-between rounded-md border-t p-10">
          <InsertEmoticonIcon />
          <form>
            <input placeholder="type a message" type="text" />
            <button /*onClick={sendMessage}*/ type="submit">
              Send a Message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </div>
  )
}

export default chat
