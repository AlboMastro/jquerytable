$(document).ready(function() {

  var columnDefs = [{
    data: "id",
    title: "Id",
    type: "readonly"
  },
  {
    data: "name",
    title: "Name"
  },
 {
    data: "position",
    title: "Position"
  },
 {
    data: "office",
    title: "Office"
  },
 {
    data: "extension",
    title: "Extn."
  },
 {
    data: "startDate",
    title: "Start date"
  },
 {
    data: "salary",
    title: "Salary"
  },
 {
    data: null,
    title: "Actions",
    name: "Actions",
    render: function (data, type, row, meta) {
      return '<a class="delbutton fa fa-minus-square btn btn-danger" href="#"></a>';
    },
    disabled: true
  } 
  ];

  var myTable;

  myTable = $('#example').DataTable({
    "sPaginationType": "full_numbers",
    data: dataSet,
    columns: columnDefs,
	dom: 'Bfrtip',        // Needs button container
    select: {
        style: 'single',
        toggleable: false
    },
    responsive: true,
    altEditor: true,     // Enable altEditor
    buttons: []          // no buttons, however this seems compulsory
  });

  // Edit
  $(document).on('click', "[id^='example'] tbody ", 'tr', function () {
    var tableID = $(this).closest('table').attr('id');    // id of the table
    var that = $( '#'+tableID )[0].altEditor;
    that._openEditModal();
    $('#altEditor-edit-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._editRowData();
                });
  });

  // Delete
  $(document).on('click', "[id^='example'] .delbutton", 'tr', function (x) {
    var tableID = $(this).closest('table').attr('id');    // id of the table
    var that = $( '#'+tableID )[0].altEditor;
    that._openDeleteModal();
    $('#altEditor-delete-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._deleteRow();
                });
    x.stopPropagation(); //avoid open "Edit" dialog
  });

  // Add row
  $('#addbutton').on('click', function () {
    var that = $( '#example' )[0].altEditor;
    that._openAddModal();
    $('#altEditor-add-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._addRowData();
                });
  });
});