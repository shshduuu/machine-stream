export interface Button {
    name: string,
    linke: string,
    icon: string,
    desc: string
}

export interface MachineData {
    status: string,
    machine_type: string,
    longitude: number,
    latitude: number,
    last_mainenance: Date,
    install_date: string,
    id: string,
    floor: number
  }