import React from 'react'
import { createPortal } from 'react-dom'

interface modalProps {
  isOpen?: boolean
  title?: string
  butonLabel?: string
  onClickButton?: (e: MouseEvent) => void
  isChecked?: boolean
}

function Modal({ isOpen, title, butonLabel, onClickButton, isChecked }: modalProps) {
  return createPortal(
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 class="mb-4 text-lg font-bold">모달 제목</h2>
        <p class="mb-6 text-gray-600">이것은 모달 내용입니다.</p>
        <div class="flex justify-end space-x-2">
          <button class="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400">취소</button>
          <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">확인</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
