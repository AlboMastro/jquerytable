
const tableModify = (id) => {
    console.log("Modificato")
}

const tableRemove = (id) => {
    console.log("Rimosso")
}

$(document).ready(function () {
  $("#example").DataTable({
    ajax: {
      url: " http://localhost:3000/anagraficajson",
      type: "GET",
      dataSrc: "",
      dataType: "json",
    },
    columns: [
      { data: "id" },
      { data: "RagSoc" },
      { data: "Address" },
      { data: "City" },
      { data: "Prov" },
      { data: "CAP" },
      { data: "PIVA" },
      { data: "CF" },
      { data: "Phone" },
      { data: "Fax" },
      { data: "Email" },
    ],

    columnDefs: [
      {
        targets: [0],
        visible: false,
        searchable: false,
      },
      {
        render: function (data, type, full, row) {
          return `<button class="btn btn-dark" id="${full.id}" onclick="tableModify(${full.id})">Modifica</button>`;
        },
        targets: 11,
      },
      {
        render: function (data, type, full, row) {
          return `<button class="btn btn-danger" id="${full.id}" onclick="tableRemove(${full.id})">Rimuovi</button>`;
        },
        targets: 12,
      },
    ],
  });
});
