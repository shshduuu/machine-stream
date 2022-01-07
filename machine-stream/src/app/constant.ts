export const ColDefMachine = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'action', headerName: 'events', flex: 1, cellRenderer: 'detailsRenderer', filter: false },
    { field: 'status', headerName: 'status', flex: 2, cellRenderer: 'animateShowChange' },
    { field: 'machine_type', headerName: 'machine type', flex: 2 },
    { field: 'longitude', headerName: 'longitude', flex: 2 },
    { field: 'latitude', headerName: 'latitude', flex: 2 },
    { field: 'last_maintenance', headerName: 'last maintenance', flex: 2 },
    { field: 'install_date', headerName: 'install date', flex: 2 },
    { field: 'floor', headerName: 'floor', flex: 2 },
];

export const ColDefEvent = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'timestamp', headerName: 'time stamp', flex: 2 },
  { field: 'status', headerName: 'status', flex: 1 },
];

export const buttons = [
    {
      name: 'helpButton',
      link: 'http://codingcase.zeiss.services/?type=frontend-xZEISSPS',
      icon: 'help_outline',
      desc: 'Support',
    },
    {
      name: 'homeButton',
      link: 'http://zeiss.de',
      icon: 'home',
      desc: 'Homepage',
    },
    {
      name: 'messageButton',
      link: 'http://zeiss.de',
      icon: 'textsms',
      desc: 'FAQ',
    },
    {
      name: 'infoButton',
      link: 'http://codingcase.zeiss.services/?type=frontend-xZEISSPS',
      icon: 'info_outline',
      desc: 'Confluence',
    },
  ];

 const rowClassRules =  {
    "rag-green-outer"(params: { data: { status: string; }; }) {
      return params.data.status.toUpperCase() === "FINISHED";
    },
    "rag-red-outer"(params: { data: { status: string; }; }) {
      return params.data.status.toUpperCase() === "ERRORED";
    },
    "rag-yellow-outer"(params: { data: { status: string; }; }) {
      return params.data.status.toUpperCase() === "REPAIRED" || params.data.status.toUpperCase() === "IDLE";
    },
  }

  export const gridOptions = {
    animateRows: true,
    defaultColDef: {
      minWidth: 100,
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    },
    rowClassRules: rowClassRules
  };
