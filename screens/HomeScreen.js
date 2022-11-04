import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react'
import CustomListview from '../components/CustomList'

export default class HomeScreen extends Component {
    getData() {
        return [
            {
                key: 1,
                title: 'Circle',
                description: 'A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre; equivalently it is the curve traced out by a point that moves so that its distance from a given point is constant. The distance between any of the points and the centre is called the radius. ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/481/481078.png',
            },
            {
                key: 2,
                title: 'Square',
                description: 'A square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles, or 100-gradian angles or right angles). It can also be defined as a rectangle in which two adjacent sides have equal length.',
                image_url: 'https://cdn-icons-png.flaticon.com/512/545/545666.png',
            },
            {
                key: 3,
                title: 'Rectangle',
                description: 'A rectangle is a quadrilateral with four right angles. It can also be defined as an equiangular quadrilateral, since equiangular means that all of its angles are equal. Angles of a rectangle add up to 360 degrees.',
                image_url: 'https://cdn-icons-png.flaticon.com/512/3305/3305374.png',
            },
            {
                key: 4,
                title: 'Parallellogram',
                description: 'A parallelogram is a quadrilateral with two pairs of parallel sides. It can also be defined as a quadrilateral with opposite sides equal and parallel. The opposite or facing sides of a parallelogram are congruent (equal) and parallel. ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/4718/4718846.png',
            },
            {
                key: 5,
                title: 'Rhombus',
                description: 'A rhombus is a parallelogram with four equal sides. It can also be defined as a quadrilateral with four equal sides. The opposite or facing sides of a rhombus are congruent (equal).',
                image_url: 'https://cdn-icons-png.flaticon.com/512/649/649721.png',
            },
            {
                key: 6,
                title: 'Triangle',
                description: 'A triangle is a polygon with three edges and three vertices. It can also be defined as a three-sided polygon. The sum of the internal angles in any triangle is 180 degrees. ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/481/481099.png',
            },
            {
                key: 7,
                title: 'Pentagon',
                description: 'A pentagon is a five-sided polygon. It can also be defined as a five-sided polygon. The sum of the internal angles in any pentagon is 540 degrees. ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/649/649725.png',
            },
            {
                key: 8,
                title: 'Trapezoid',
                description: 'A trapezoid is a quadrilateral with exactly one pair of parallel sides. It can also be defined as a quadrilateral with exactly one pair of parallel sides. The opposite or facing sides of a trapezoid are not congruent (equal). ',
                image_url: 'https://cdn-icons-png.flaticon.com/512/4718/4718951.png',
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomListview
                    itemList={this.getData()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    }
});