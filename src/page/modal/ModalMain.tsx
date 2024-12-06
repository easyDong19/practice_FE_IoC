import { Button } from '@/shared/Button'
import Modal from '@/shared/Modal'
import React from 'react'

function ModalMain() {
  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="text-3xl font-bold">모달 창</h1>
      <div>
        <Button variant="primary" size="large">
          모달 띄우기
        </Button>

        <Modal />
      </div>
    </div>
  )
}

export default ModalMain
