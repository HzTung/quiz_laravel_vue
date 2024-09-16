<template>
    <div
        class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
        style="border: 1px solid black"
    >
        <h1
            class="text-3xl font-bold mb-6 text-green-400 text-center text-success"
        >
            GeeksforGeeks
        </h1>
        <h3 class="text-2xl font-bold mb-6 text-center">Coding Quiz</h3>
        <form id="quizForm" class="space-y-4">
            <!-- Question 1 -->
            <div class="flex flex-col mb-4">
                <label for="q1" class="text-lg text-gray-800 mb-2">
                    1. question
                </label>
                <div class="flex items-center space-x-4">
                    <input type="radio" id="q1a" class="mr-2" required />
                    <label for="q1a" class="text-gray-700">
                        text question
                    </label>
                </div>
            </div>
            <hr />

            <!-- Navigation Buttons -->
            <div class="flex justify-between">
                <button
                    type="button"
                    onclick="prevQuestion()"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onclick="nextQuestion()"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md"
                >
                    Next
                </button>
            </div>
            <hr />

            <button
                type="button"
                onclick="submitQuiz()"
                class="bg-green-500 text-white px-4 py-2 rounded-md mt-8"
            >
                Submit
            </button>

            <button
                type="button"
                onclick="restartQuiz()"
                class="bg-red-500 text-white px-3 py-2 rounded-md mt-4"
            >
                Restart Quiz
            </button>
        </form>

        <div id="result" class="mt-8 hidden">
            <h2 class="text-2xl font-bold mb-4 text-center">
                ???? Quiz Result
            </h2>
            <p id="score" class="text-lg font-semibold mb-2 text-center"></p>
            <p id="feedback" class="text-gray-700 text-center"></p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";

const route = useRoute();

const id = route.params.id;

const questions = ref([]);

axios
    .get(`/db/Quizs/${id}.js`)
    .then((res) => {
        questions.value = res.data;
        console.log(questions);
    })
    .catch((error) => {
        console.error("Error fetching quiz data:", error);
        throw error;
    });
console.log(questions);

const saveQuestion = () => {};
const nextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
        currentQuestionIndex.value++;
    }
};

// Function to move to the previous question
const prevQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
    }
};

// Function to handle quiz submission
const submitQuiz = () => {
    alert("Quiz submitted!");
};

// Function to restart the quiz
const restartQuiz = () => {
    currentQuestionIndex.value = 0;
};
</script>
