import React from 'react';

class DownloadButton extends React.Component {
  downloadCsv = () => {
    fetch('http://localhost:3000/api/v1/export_csv.csv') // replace with your API endpoint
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'all_film_reviews.csv'; // or any other filename you want
        a.click();
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <button onClick={this.downloadCsv}>
        Download CSV
      </button>
    );
  }
}

export default DownloadButton;
