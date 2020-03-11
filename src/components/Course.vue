<template>
    <tr>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div>
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        <router-link
                                :to="{name: 'course', params: {id: course.id}}">{{ course.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div>
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ course.code }}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-500">
                {{ course.description }}
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            {{ course.points }}
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            {{ course.level }}
        </td>
        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a href="#"
               class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
               @click="editCourse(course)">Edit</a>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "Course",
        props: ['course'],
        methods: {
            editCourse(course) {
                this.$emit("edit-course", course);
            }
        }
    }
</script>

<style scoped>

</style>