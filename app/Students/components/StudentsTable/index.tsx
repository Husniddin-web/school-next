import { Button, Table } from '@/components'
import React from 'react'
import { studentTableCols } from './columns'
import { useStudents } from '@/hooks'

const StudentsTable = () => {
    const { data: users, isLoading } = useStudents();

    return (
        <div>
            <Table
            loading={isLoading}
                columns={studentTableCols}
                dataSrc={users}
            />
        </div>
    )
}

export default StudentsTable