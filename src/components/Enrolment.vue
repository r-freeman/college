<template>
    <router-link :to="{name: 'viewEnrolment', params: {id: enrolment.id}}" tag="tr"
                 class="cursor-pointer">

        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div>
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ enrolment.date | moment("Do MMMM YYYY") }}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div>
                    <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ [enrolment.time, "hh:mm:ss"] | moment("hh:mm A") }}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 font-medium text-gray-900">
                {{ enrolment.status }}
            </div>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
            {{ enrolment.course.title }}
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
            {{ enrolment.lecturer.name }}
        </td>
    </router-link>
</template>

<script>
    export default {
        name: "Enrolment",
        props: ['enrolment']
    }
</script>

<style scoped>

</style>