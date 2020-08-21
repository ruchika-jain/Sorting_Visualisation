import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';



const PRIMARY_COLOR = 'black'; //Normal color of bars
const SECONDARY_COLOR = 'red'; //Color of bars when they are being compared
const ANIMATION_SPEED_MS = 3; //Animation Speed (how fast color changes, how fast height gets overwritten)



class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    //Generates new random array 
    resetArray() {
        const array = [];
        for(let i = 0; i < 250; i++) {
            array.push(randomIntformIntervals(5, 600));
        }
        this.setState({array});
    }
    
    mergeSort() {
        const [animations,sortArray] = getMergeSortAnimations(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
               
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
                
            }
            else {
                setTimeout(() => {
                    const [overwrite, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                  },i * ANIMATION_SPEED_MS);
            }
        }
    
    }
    quickSort() {

        const [animations,sortArray] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }        
        } 
    }
    bubbleSort() {
        const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }

        

    }
    insertionSort() {

        const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        
        
    }
    selectionSort() {
        const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        
    }
    render() {
        const array = this.state.array;
        return(
            <>
            <div className="array-container" style={{position:'absolute', right:`20px`}}>
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`
                        }}
                    ></div>
                ))}
            </div>
            <div className="but" >
                <button style={{position:'relative', marginBottom: '40px'}} onClick={() => this.resetArray()}>Generate</button>

                <button id = "mergeSort" style={{position:'relative',marginBottom: '40px'}} onClick={() => this.mergeSort()}>MergeSort</button>
                <button id = "quickSort" style={{position:'relative',marginBottom: '40px'}} onClick={() => this.quickSort()}>QuickSort</button>
                <button id = "bubbleSort" style={{position:'relative',marginBottom: '40px'}} onClick={() => this.bubbleSort()}>BubbleSort</button>
                <button id = "insertionSort" style={{position:'relative',marginBottom: '40px'}} onClick={() => this.insertionSort()}>InsertionSort</button>
                <button id = "selectionSort" style={{position:'relative',marginBottom: '40px'}} onClick={() => this.selectionSort()}>SelectionSort</button>
            </div>
            </>
        );
    }
}

function randomIntformIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;


