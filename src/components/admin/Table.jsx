import React, { Component, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import { Link } from "react-router-dom";
import "./tableStyle.css";

class Table extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "api/movies",
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "auth_token"
          )}`,
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response.data.movies);
          //setMovies(response.data.movies);
          //console.log(res);
          this.setState({
            movies: response.data.movies,
            loading: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });

      //const res = await axios.get("http://127.0.0.1:8000/api/movies");

      if (!$.fn.DataTable.isDataTable("#myTable")) {
        $(document).ready(function () {
          setTimeout(function () {
            $("#table").DataTable({
              pagingType: "full_numbers",
              retrieve: true,
              backgroundColor: "white",
              color: "white",
              pageLength: 10,
              processing: true,
              dom: "Bfrtip",
              select: {
                style: "single",
              },
              buttons: [
                {
                  extend: "pageLength",
                  className: "btn btn-secondary bg-secondary",
                },
                {
                  extend: "copy",
                  className: "btn btn-secondary bg-secondary",
                },
                {
                  extend: "csv",
                  className: "btn btn-secondary bg-secondary",
                },
                {
                  extend: "print",
                  customize: function (win) {
                    $(win.document.body).css("font-size", "10pt");
                    $(win.document.body)
                      .find("table")
                      .addClass("compact")
                      .css("font-size", "inherit");
                  },
                  className: "btn btn-secondary bg-secondary",
                },
              ],
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
              },
              lengthMenu: [
                [10, 20, 30, 50, -1],
                [10, 20, 30, 50, "All"],
              ],
              columnDefs: [
                {
                  targets: 0,
                  render: function (data, type, row, meta) {
                    return type === "export" ? meta.row + 1 : data;
                  },
                },
              ],
            });
          }, 1000);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  showTable = () => {
    try {
      return this.state.movies.map((item, index) => (
        <tr key={index} style={{ color: "white" }} className="movieContent">
          <td className="text-xs font-weight-bold">{index + 1}</td>
          <td className="text-xs font-weight-bold">{item.title}</td>
          <td
            className="text-xs font-weight-bold"
            style={{ width: 23 + "rem" }}
          >
            {item.description}
          </td>
          <td className="text-xs font-weight-bold">{item.rating}</td>
          <td className="text-xs font-weight-bold">
            <div className="moviePicture">
              <img
                src={item.picture}
                alt="img"
                style={{ width: 18 + "rem", height: 11 + "rem" }}
                id="moviePicture"
              />
            </div>
          </td>
          <td className="text-xs font-weight-bold">{item.user.id}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteMovie(e, item.id)}
            >
              Delete
            </button>{" "}
            <br /> <br />
            <Link className="btn btn-primary" to={`/update/${item.id}`}>
              Update
            </Link>
          </td>
        </tr>
      ));
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <div className="movieTable">
        <div className="container-fluid py-4">
          <div className="table-responsive p-0 pb-2">
            <table
              id="table"
              className="table align-items-center justify-content-center mb-0"
            >
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    Id
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    Title
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    Description
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    Rating
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    Picture
                  </th>
                  <th className="text-uppercase text-secondary text-sm font-weight-bolder  ps-2">
                    User Id
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.showTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  backgroundColor: "white",
  opacity: 0.97,
  textAlign: "center",
  width: 80 + "%",
  marginLeft: 10 + "%",
};

const loadData = async () => {
  var config = {
    method: "get",
    url: "api/movies",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
};

loadData();

function deleteMovie(e, id) {
  e.preventDefault();
  const thisClicked = e.currentTarget;
  thisClicked.innerText = "Deleting";
  thisClicked.closest("tr").remove();

  axios
    .delete("api/admin/movies/" + id, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      alert("OBRISANO");
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);

        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
}

function updateMovie(movie) {}

export default Table;
