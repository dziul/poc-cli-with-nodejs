#!/usr/bin/env node
import {Command} from 'commander'
import { add } from './commands/add'

const program =  new Command() 

program.name('xpto')
    .description('a build tool that aims to provide a faster and leaner development experience for modern web projects XPTO')
    .version('0.1.0')


program.argument('<string>', 'dir name')
    .description('add scaffolding Mova Project')
    .option('-i', 'initial change name')
    .action(add)


program.parse()