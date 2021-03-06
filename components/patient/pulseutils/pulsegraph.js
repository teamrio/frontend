import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';

export default function PulseGraph({ raw }) {
    // const scrnWidth = Dimensions.get("window").width;

    const data = {
        // label: "Time (in ms)",
        datasets: [
            {
                data: [
                    1805,
                    1779,
                    1783,
                    1790,
                    1785,
                    1789,
                    1787,
                    1786,
                    1782,
                    1781,
                    1791,
                    1790,
                    1780,
                    1786,
                    1788,
                    1788,
                    1798,
                    1797,
                    1813,
                    1840,
                    1814,
                    1833,
                    1815,
                    1809,
                    1813,
                    1811,
                    1808,
                    1810,
                    1803,
                    1801,
                    1795,
                    1803,
                    1799,
                    1791,
                    1789,
                    1783,
                    1758,
                    1787,
                    1773,
                    1782,
                    1782,
                    1781,
                    1789,
                    1787,
                    1787,
                    1796,
                    1794,
                    1796,
                    1795,
                    1796,
                    1825,
                    1794,
                    1798,
                    1800,
                    1776,
                    1803,
                    1778,
                    1796,
                    1790,
                    1795,
                    1795,
                    1791,
                    1793,
                    1795,
                    1792,
                    1795,
                    1791,
                    1796,
                    1791,
                    1797,
                    1795,
                    1795,
                    1798,
                    1795,
                    1794,
                    1806,
                    1776,
                    1797,
                    1813,
                    1808,
                    1818,
                    1825,
                    1827,
                    1825,
                    1814,
                    1813,
                    1808,
                    1796,
                    1805,
                    1793,
                    1789,
                    1783,
                    1787,
                    1781,
                    1789,
                    1834,
                    1755,
                    1776,
                    1771,
                    1782,
                    1776,
                    1781,
                    1771,
                    1779,
                    1779,
                    1783,
                    1783,
                    1791,
                    1786,
                    1789,
                    1789,
                    1790,
                    1789,
                    1787,
                    1769,
                    1786,
                    1785,
                    1781,
                    1776,
                    1782,
                    1787,
                    1782,
                    1776,
                    1779,
                    1776,
                    1783,
                    1777,
                    1783,
                    1778,
                    1778,
                    1776,
                    1787,
                    1775,
                    1783,
                    1775,
                    1786,
                    1777,
                    1787,
                    1794,
                    1801,
                    1799,
                    1806,
                    1807,
                    1808,
                    1806,
                    1766,
                    1791,
                    1795,
                    1786,
                    1786,
                    1778,
                    1775,
                    1767,
                    1767,
                    1761,
                    1765,
                    1762,
                    1762,
                    1770,
                    1773,
                    1771,
                    1783,
                    1776,
                    1776,
                    1777,
                    1781,
                    1806,
                    1780,
                    1778,
                    1776,
                    1778,
                    1789,
                    1775,
                    1785,
                    1776,
                    1789,
                    1774,
                    1776,
                    1801,
                    1780,
                    1776,
                    1778,
                    1777,
                    1780,
                    1775,
                    1778,
                    1776,
                    1778,
                    1776,
                    1781,
                    1779,
                    1785,
                    1778,
                    1786,
                    1777,
                    1787,
                    1790,
                    1794,
                    1798,
                    1808,
                    1808,
                    1815,
                    1806,
                    1808,
                    1808,
                    1792,
                    1788,
                    1791,
                    1777,
                    1783,
                    1776,
                    1771,
                    1768,
                    1771,
                    1765,
                    1765,
                    1762,
                    1769,
                    1763,
                    1777,
                    1785,
                    1786,
                    1782,
                    1794,
                    1783,
                    1792,
                    1801,
                    1805,
                    1790,
                    1791,
                    1782,
                    1791,
                    1790,
                    1793,
                    1727,
                    1792,
                    1786,
                    1794,
                    1783,
                    1789,
                    1794,
                    1792,
                    1791,
                    1795,
                    1786,
                    1824,
                    1792,
                    1793,
                    1791,
                    1796,
                    1786,
                    1802,
                    1792,
                    1824,
                    1806,
                    1817,
                    1827,
                    1839,
                    1855,
                    1853,
                    1863,
                    1861,
                    1855,
                    1856,
                    1842,
                    1855,
                    1793,
                    1837,
                    1822,
                    1822,
                    1809,
                    1813,
                    1797,
                    1808,
                    1795,
                    1797,
                    1801,
                    1796,
                    1793,
                    1808,
                    1804,
                    1809,
                    1808,
                    1811,
                    1808,
                    1822,
                    1808,
                    1819,
                    1835,
                    1819,
                    1808,
                    1827,
                    1808,
                    1777,
                    1807,
                    1774,
                    1806,
                    1808,
                    1833,
                    1876,
                    1805,
                    1807,
                    1795,
                    1806,
                    1794,
                    1805,
                    1791,
                    1799,
                    1806,
                    1806,
                    1808,
                    1793,
                    1809,
                    1808,
                    1818,
                    1823,
                    1817,
                    1841,
                    1839,
                    1843,
                    1840,
                    1844,
                    1840,
                    1830,
                    1819,
                    1824,
                    1814,
                    1813,
                    1806,
                    1808,
                    1798,
                    1796,
                    1795,
                    1796,
                    1791,
                    1795,
                    1795,
                    1802,
                    1805,
                    1805,
                    1807,
                    1809,
                    1809,
                    1810,
                    1797,
                    1814,
                    1814,
                    1813,
                    1808,
                    1808,
                    1808,
                    1814,
                    1807,
                    1810,
                    1808,
                    1811,
                    1808,
                    1817,
                    1816,
                    1820,
                    1803,
                    1818,
                    1808,
                    1818,
                    1813,
                    1815,
                    1813,
                    1814,
                    1813,
                    1811,
                    1822,
                    1826,
                    1828,
                    1840,
                    1835,
                    1861,
                    1871,
                    1876,
                    1881,
                    1883,
                    1881,
                    1877,
                    1870,
                    1870,
                    1845,
                    1868,
                    1839,
                    1835,
                    1827,
                    1854,
                    1816,
                    1814,
                    1808,
                    1808,
                    1808,
                    1809,
                    1808,
                    1808,
                    1802,
                    1821,
                    1808,
                    1827,
                    1758,
                    1821,
                    1815,
                    1819,
                    1811,
                    1817,
                    1811,
                    1813,
                    1807,
                    1808,
                    1801,
                    1803,
                    1794,
                    1808,
                    1794,
                    1802,
                    1797,
                    1804,
                    1792,
                    1776,
                    1798,
                    1806,
                    1797,
                    1801,
                    1808,
                    1831,
                    1806,
                    1814,
                    1808,
                    1821,
                    1815,
                    1807,
                    1795,
                    1898,
                    1856,
                    1860,
                    1838,
                    1863,
                    1860,
                    1858,
                    1851,
                    1904,
                    1841,
                    1837,
                    1830,
                    1821,
                    1799,
                    1807,
                    1803,
                    1805,
                    1871,
                    1792,
                    1793,
                    1797,
                    1787,
                    1793,
                    1802,
                    1802,
                    1808,
                    1813,
                    1803,
                    1810,
                    1805,
                    1809,
                    1808,
                    1808,
                    1808,
                    1812,
                    1802,
                    1806,
                    1794,
                    1808,
                    1799,
                    1807,
                    1802,
                    1806,
                    1791,
                    1811,
                    1806,
                    1811,
                    1809,
                    1868,
                    1814,
                    1825,
                    1810,
                    1821,
                    1819,
                    1776,
                    1818,
                    1840,
                    1851,
                    1841,
                    1854,
                    1870,
                    1868,
                    1875,
                    1872,
                    1872,
                    1855,
                    1857,
                    1851,
                    1855,
                    1837,
                    1837,
                    1817,
                    1818,
                    1808,
                    1815,
                    1811,
                    1808,
                    1808,
                    1819,
                    1815,
                    1818,
                    1811,
                    1829,
                    1831,
                    1843,
                    1840,
                    1839,
                    1847,
                    1845,
                    1840,
                    1842,
                    1830,
                    1839,
                    1822,
                    1823,
                    1808,
                    1811,
                    1794,
                    1811,
                    1795,
                    1808,
                    1798,
                    1799,
                    1801,
                    1805,
                    1801,
                    1806,
                    1798,
                    1808,
                    1799,
                    1806,
                    1801,
                    1805,
                    1811,
                    1821,
                    1819,
                    1831,
                    1838,
                    1856,
                    1857,
                    1873,
                    1882,
                    1874,
                    1878,
                    1871,
                    1861,
                    1858,
                    1853,
                    1844,
                    1830,
                    1831,
                    1813,
                    1822,
                    1807,
                    1808,
                    1804,
                    1799,
                    1791,
                    1796,
                    1792,
                    1796,
                    1787,
                    1799,
                    1791,
                    1802,
                    1797,
                    1799,
                    1795,
                    1796,
                    1748,
                    1799,
                    1785,
                    1790,
                    1788,
                    1792,
                    1791,
                    1790,
                    1782,
                    1787,
                    1806,
                    1789,
                    1782,
                    1793,
                    1780,
                    1792,
                    1789,
                    1795,
                    1795,
                    1792,
                    1792,
                    1797,
                    1798,
                    1803,
                    1795,
                    1811,
                    1810,
                    1839,
                    1823,
                    1840,
                    1837,
                    1840,
                    1831,
                    1838,
                    1828,
                    1828,
                    1819,
                    1809,
                    1805,
                    1805,
                    1797,
                    1795,
                    1789,
                    1786,
                    1776,
                    1789,
                    1783,
                    1781,
                    1783,
                    1779,
                    1790,
                    1783,
                    1778,
                    1788,
                    1781,
                    1795,
                    1790,
                    1798,
                    1786,
                    1793,
                    1782,
                    1792,
                    1787,
                    1783,
                    1783,
                    1789,
                    1778,
                    1788,
                    1778,
                    1795,
                    1774,
                    1783,
                    1775,
                    1776,
                    1767,
                    1776,
                    1766,
                    1761,
                    1760,
                    1754,
                    1759,
                    1760,
                    1692,
                    1754,
                    1744,
                    1747,
                    1749,
                    1760,
                    1762,
                    1776,
                    1776,
                    1833,
                    1795,
                    1806,
                    1840,
                    1747,
                    1781,
                    1786,
                    1777,
                    1785,
                    1774,
                    1776,
                    1772,
                    1776,
                    1755,
                    1766,
                    1753,
                    1760,
                    1750,
                    1763,
                    1756,
                    1766,
                    1758,
                    1763,
                    1763,
                    1761,
                    1766,
                    1774,
                    1798,
                    1775,
                    1767,
                    1774,
                    1770,
                    1867,
                    1766,
                    1776,
                    1768,
                    1777,
                    1776,
                    1770,
                    1770,
                    1774,
                    1766,
                    1776,
                    1776,
                    1776,
                    1771,
                    1773,
                    1772,
                    1788,
                    1773,
                    1772,
                    1807,
                    1805,
                    1775,
                    1781,
                    1774,
                    1779,
                    1766,
                    1778,
                    1773,
                    1787,
                    1776,
                    1793,
                    1794,
                    1808,
                    1803,
                    1811,
                    1807,
                    1808,
                    1806,
                    1808,
                    1793,
                    1804,
                    1789,
                    1787,
                    1776,
                    1779,
                    1775,
                    1778,
                    1779,
                    1781,
                    1776,
                    1778,
                    1775,
                    1777,
                    1782,
                    1787,
                    1776,
                    1791,
                    1778,
                    1782,
                    1786,
                    1783,
                    1777,
                    1780,
                    1781,
                    1778,
                    1776,
                    1776,
                    1779,
                    1754,
                    1776,
                    1866,
                    1791,
                    1776,
                    1733,
                    1788,
                    1786,
                    1791,
                    1789,
                    1799,
                    1794,
                    1802,
                    1786,
                    1808,
                    1792,
                    1799,
                    1797,
                    1796,
                    1792,
                    1795,
                    1797,
                    1805,
                    1795,
                    1806,
                    1808,
                    1796,
                    1797,
                    1803,
                    1791,
                    1809,
                    1808,
                    1815,
                    1809,
                    1813,
                    1808,
                    1815,
                    1810,
                    1808,
                    1808,
                    1815,
                    1806,
                    1809,
                    1799,
                    1806,
                    1797,
                    1795,
                    1794,
                    1804,
                    1790,
                    1795,
                    1795,
                    1789,
                    1787,
                    1803,
                    1793,
                    1807,
                    1795,
                    1818,
                    1798,
                    1808,
                    1808,
                    1805,
                    1820,
                    1811,
                    1808,
                    1793,
                    1805,
                    1809,
                    1809,
                    1823,
                    1808,
                    1814,
                    1821,
                    1817,
                    1819,
                    1819,
                    1811,
                    1811,
                    1808,
                    1809,
                    1805,
                    1804,
                    1801,
                    1802,
                    1803,
                    1803,
                    1797,
                    1803,
                    1790,
                    1804,
                    1795,
                    1808,
                    1794,
                    1808,
                    1811,
                    1824,
                    1824,
                    1834,
                    1830,
                    1840,
                    1831,
                    1842,
                    1833,
                    1831,
                    1822,
                    1823,
                    1816,
                    1821,
                    1812,
                    1819,
                    1811,
                    1817,
                    1813,
                    1808,
                    1808,
                    1811,
                    1811,
                    1819,
                    1809,
                    1832,
                    1814,
                    1821,
                    1814,
                    1826,
                    1819,
                    1840,
                    1823,
                    1821,
                    1814,
                    1811,
                    1819,
                    1822,
                    1814,
                    1823,
                    1813,
                    1814,
                    1811,
                    1811,
                    1808,
                    1817,
                    1809,
                    1815,
                    1808,
                    1812,
                    1812,
                    1814,
                    1801,
                    1810,
                    1809,
                    1811,
                    1810,
                    1815,
                    1815,
                    1808,
                    1808,
                    1813,
                    1808,
                    1820,
                    1809,
                    1813,
                    1818,
                    1821,
                    1829,
                    1835,
                    1831,
                    1847,
                    1845,
                    1843,
                    1840,
                    1846,
                    1834,
                    1832,
                    1825,
                    1821,
                    1811,
                    1808,
                    1803,
                    1807,
                    1799,
                    1802,
                    1796,
                    1806,
                    1798,
                    1803,
                    1800,
                    1806,
                    1805,
                    1807,
                    1803,
                    1811,
                    1817,
                    1816,
                    1803,
                    1807,
                    1787,
                    1808,
                    1798,
                    1809,
                    1799,
                    1804,
                    1793,
                    1808,
                    1806,
                    1808,
                    1802,
                    1805,
                    1805,
                    1806,
                    1803,
                    1808,
                    1805,
                    1808,
                    1808,
                    1803,
                    1806,
                    1808,
                    1807,
                    1808,
                    1810,
                    1811,
                    1808,
                    1811,
                    1805,
                ],
                // data: { raw },
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 1
            }
        ],
        // legend: []
    };

    return (
      <View style={styles.graph}>
          <LineChart
            data = { data }
            width = { 350 }
            height = { 100 }
            withHorizontalLines = {false}
            withVerticalLines = {false}
            // yAxisLabel = 'BPM'
            xAxisLabel = 'Time (in ms)'
            chartConfig = {{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(45, 45, 45, ${opacity})`,
                // labelColor: (opacity = 1) => `rgba(45, 45, 45, ${opacity})`,
                // style: {
                //   borderRadius: 16
                // },
                propsForDots: {
                  r: "0.2",
                //   strokeWidth: "1",
                //   stroke: "#454545"
                }
              }}
            // bezier
          />
      </View>
    );
  }

  const styles = StyleSheet.create({
    graph: {
        marginTop: 20,
    }
  });
