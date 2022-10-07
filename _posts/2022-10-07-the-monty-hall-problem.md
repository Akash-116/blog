---
layout: post
title: The Monty Hall Problem
date: 2022-10-07 13:19 +0530
author: akash
categories: [questions]
tags: [probability]
image: https://images.pluto.tv/channels/6267352efcf21c0007c76642/featuredImage.jpg?auto=&fill=blur&fit=fill&ixlib=react-9.1.5&h=562&w=1024
description: This is a mathematical treatment of the monty-hall problem, which often confuses people on their first attempt
rating: 
---

Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?". What is the probability to win car if you switch?

<details>
       <summary>Answer </summary>
       <detailsbody> 2/3. </detailsbody>

</details>

<details>
       <summary>Solution </summary>
       <detailsbody>
Say the events:
A1 -> Car is behind door 1
A2 -> Car is behind door 2
A3 -> Car is behind door 3

Even before the game starts and all:

P(A1) = P(A2) = P(A3) = 1/3

Now, as per the description in the game... Say all the stuff happened as event 'D' :

[Note : 
    It is of utmost importance that you define the event 'D' correctly!
    The most common error in understanding is about this event 'D'
    Some wrong interpretations of 'D' are

    D -> Person Chosed door 1
    (or)
    D -> Host Opened door 3

    It should be both of the above!
    This is the intended meaning of Monty-Hall Problem
]

Hence;
    D -> Person Chosed Door 1 & Host opened door 3

[Note : P(A|B) means probability of event A given event/information B]

P(A3|D) = 0; since host wont open door 3 if car is behind that.

And we need to calculate P(A1|D) and P(A2|D).

We will do this using Bayes Theorem:

Lets Calculate P(D) -

P(D) = P(D|A1)*P(A1) + P(D|A2)*P(A2) + P(D|A3)*P(A3)
     = 1/2 * 1/3 + 1 * 1/3 + 0 * 1/3
     = 1/2

And then,

P(A1|D) = {P(D|A1) * P(A1)} / P(D)
        = { 1/2 * 1/3 } / 1/2
        = 1/3

P(A2|D) = {P(D|A2) * P(A2)} / P(D)
        = { 1 * 1/3 } / 1/2
        = 2/3

P(A3|D) = {P(D|A3) * P(A3)} / P(D)
        = { 0 * 1/3 } / 1/2
        = 0

Hence, If the person switches, he has a winning probability of (P(A2|D) equals to) 2/3</detailsbody>
</details>
