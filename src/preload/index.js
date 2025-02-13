import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  users: {
    create: (user) => ipcRenderer.invoke('create-user', user),
    read: () => ipcRenderer.invoke('read-users'),
    update: (user) => ipcRenderer.invoke('update-user', user),
    delete: (id) => ipcRenderer.invoke('delete-user', id)
  }
}
const auth = {
  register: (credentials) => ipcRenderer.invoke('register', credentials),
  login: (credentials) => ipcRenderer.invoke('login', credentials)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('auth', auth)
  } catch (error) {
    console.error('Error exposing API:', error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
