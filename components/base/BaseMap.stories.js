import BaseMap from './BaseMap'

export default {
  title: 'Base/Map',
  component: BaseMap,
  parameters: {
    chromatic: { delay: 1500 },
  },
  // methods: {
  //   plotMap (map) {
  //     // Data: UN Human Development Index 2017 Europe extract
  //     // Source: https://ourworldindata.org/human-development-index
  //     const data = [{ code: 'ROU', hdi: 0.811 },
  //       { code: 'RUS', hdi: 0.816 },
  //       { code: 'SRB', hdi: 0.787 },
  //       { code: 'SVK', hdi: 0.855 },
  //       { code: 'SVN', hdi: 0.896 },
  //       { code: 'ESP', hdi: 0.891 },
  //       { code: 'SWE', hdi: 0.933 },
  //       { code: 'CHE', hdi: 0.944 },
  //       { code: 'HRV', hdi: 0.831 },
  //       { code: 'CZE', hdi: 0.888 },
  //       { code: 'DNK', hdi: 0.929 },
  //       { code: 'EST', hdi: 0.871 },
  //       { code: 'FIN', hdi: 0.92 },
  //       { code: 'FRA', hdi: 0.901 },
  //       { code: 'DEU', hdi: 0.936 },
  //       { code: 'GRC', hdi: 0.87 },
  //       { code: 'ALB', hdi: 0.785 },
  //       { code: 'AND', hdi: 0.858 },
  //       { code: 'AUT', hdi: 0.908 },
  //       { code: 'BLR', hdi: 0.808 },
  //       { code: 'BEL', hdi: 0.916 },
  //       { code: 'BIH', hdi: 0.768 },
  //       { code: 'BGR', hdi: 0.813 },
  //       { code: 'MKD', hdi: 0.757 },
  //       { code: 'MLT', hdi: 0.878 },
  //       { code: 'MDA', hdi: 0.7 },
  //       { code: 'MNE', hdi: 0.814 },
  //       { code: 'NLD', hdi: 0.931 },
  //       { code: 'NOR', hdi: 0.953 },
  //       { code: 'POL', hdi: 0.865 },
  //       { code: 'PRT', hdi: 0.847 },
  //       { code: 'HUN', hdi: 0.838 },
  //       { code: 'ISL', hdi: 0.935 },
  //       { code: 'IRL', hdi: 0.938 },
  //       { code: 'ITA', hdi: 0.88 },
  //       { code: 'LVA', hdi: 0.847 },
  //       { code: 'LIE', hdi: 0.916 },
  //       { code: 'LTU', hdi: 0.858 },
  //       { code: 'LUX', hdi: 0.904 },
  //       { code: 'UKR', hdi: 0.751 },
  //       { code: 'GBR', hdi: 0.922 }]

  //     map.on('load', function () {
  //       // Add source for country polygons using the Mapbox Countries tileset
  //       // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data
  //       // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
  //       map.addSource('countries', {
  //         type: 'vector',
  //         url: 'mapbox://mapbox.country-boundaries-v1',
  //       })

  //       // Build a GL match expression that defines the color for every vector tile feature
  //       // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
  //       const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']]

  //       // Calculate color values for each country based on 'hdi' value
  //       data.forEach(function (row) {
  //         // Convert the range of data values to a suitable color
  //         const green = row.hdi * 255
  //         const color = `rgba(0, ${green}, 0, ${row.hdi / 1.5})`

  //         matchExpression.push(row.code, color)
  //       })

  //       // Last value is the default, used where there is no data
  //       matchExpression.push('rgba(0, 0, 0, 0)')

  //       // Add layer from the vector tile source to create the choropleth
  //       // Insert it below the 'admin-1-boundary-bg' layer in the style
  //       map.addLayer({
  //         'id': 'countries-join',
  //         'type': 'fill',
  //         'source': 'countries',
  //         'source-layer': 'country_boundaries',
  //         'paint': { 'fill-color': matchExpression },
  //       }, 'admin-1-boundary-bg')
  //     })
  //   },
  // },
}

export const Default = () => '<BaseMap :center="[2.15899,41.38879]" />'
export const WithCustomStyle = () => '<BaseMap :center="[2.15899,41.38879]" :zoom="2" mapStyle="mapbox://styles/mapbox/dark-v10" />'
