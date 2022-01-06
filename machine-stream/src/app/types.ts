export interface Button {
    name: string,
    link: string,
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
    events?: EventData[]
}

export interface EventData {
    timestamp: string,
    status: string
}

export interface UpdatedData {
    machine_id: string,
    id: string,
    timestamp: Date,
    status: string
}