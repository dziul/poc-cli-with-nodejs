#! /usr/bin/env node
import {program} from 'commander'
import { add } from './commands/add'



program.name('xpto')
    .description('a build tool that aims to provide a faster and leaner development experience for modern web projects XPTO')
    .version('0.1.0')


program.command('add')
        .argument('<string>', 'dir name')
        .description('add scaffolding Mova Project')
        .action(add)